import styled from "@emotion/styled";

export const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: black;
  width: 100vw;
  height: 100vh;

  .loading--title {
    font-size: var(--text-3xl);
    font-family: var(--text-title);
    color: white;
    line-height: var(--line-height-3xl);
  }

  .loading--spinner {
    border: 5px solid gray;
    border-top: 5px solid var(--primary-color);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
