import { setApiClient } from './api';
import realApiClient from './real/realApiService';
import mockApiClient from './mock/mockApiService';
import { USE_MOCK_API } from 'shared/config';

//const isMockEnabled = process.env.REACT_APP_MOCK_API === 'true';

if (USE_MOCK_API) {
  setApiClient(mockApiClient);
} else {
  setApiClient(realApiClient);
}

export * from './api';
