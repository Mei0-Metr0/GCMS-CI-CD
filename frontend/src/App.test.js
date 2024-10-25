import { screen } from '@testing-library/react';
import { act } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('renders hello world', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });
  const linkElement = screen.getByText(/Gerência de Configuração e Manutenção de Software/i);
  expect(linkElement).toBeInTheDocument();
});

/*----------------------------------------------------------------------------------------------------*/

// Mock para a função fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Hello from backend!' }),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test('renders message from backend', async () => {
  await act(async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    });
  });
  
  // Aguarda até que o texto seja encontrado
  const messageElement = await screen.findByText(/Hello from backend!/i);
  expect(messageElement).toBeInTheDocument();
});
