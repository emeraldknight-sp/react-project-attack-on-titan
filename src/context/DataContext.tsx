import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface DataContextProps {
  data: TVSeries | undefined;
  trailers: Trailers | undefined;
}

export const DataContext = createContext<DataContextProps>({
  data: undefined,
  trailers: undefined,
});

interface DataContextProviderProps {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [data, setData] = useState<TVSeries>();
  const [trailers, setTrailers] = useState<Trailers>();

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
  const ID = 1429;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      "Content-Type": "Application/json",
    },
  });

  const fetchData = async () => {
    try {
      const [contentRes, trailersRes] = await Promise.all([
        axiosInstance.get(`tv/${ID}?language=pt-BR`),
        axiosInstance.get(`tv/${ID}/videos`),
      ]);

      console.log("DATA:", contentRes);

      setData(contentRes.data);
      setTrailers(trailersRes.data);
    } catch (error) {
      console.error("Erro durante a requisição:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, trailers }}>
      {children}
    </DataContext.Provider>
  );
};
