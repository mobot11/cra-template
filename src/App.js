/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react/macro';
import { ErrorBoundary } from 'react-error-boundary';
import { Transactions } from './Transactions';

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

function App() {
  return (
    <>
      <Global
        styles={css`
          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }
          html {
            height: 100%;
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
              'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100%;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
          }
        `}
      />
      <div
        css={css`
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>hello world</ErrorBoundary>
        </main>
      </div>
    </>
  );
}

export default App;
