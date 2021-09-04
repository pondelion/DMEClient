import { createGlobalState } from 'react-hooks-global-state';


type GlobalStateType = {
  serverHost: string,
  serverPort: number
}
const initialState: GlobalStateType = {
  serverHost: 'localhost',
  serverPort: 8080,
};
export const { useGlobalState } = createGlobalState(initialState);
