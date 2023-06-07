import axios from 'axios';
import { Dispatch } from 'redux';
import { ReduxActionType } from '../../types/GlobalTypes';
//ENV
import { API_URL } from '../../config';
//Fake Backend
import MockAdapter from 'axios-mock-adapter';

const fisherman = [
    { experience: 10 },
    { experience: 20 },
    { experience: 14 }
]

export enum GetFishermanActions {
  SAVE_FISHERMAN_DATA = 'SAVE_FISHERMAN_DATA'
}

export const saveFishermanData = (data: any) => ({
  type: GetFishermanActions.SAVE_FISHERMAN_DATA as const,
  data
});

var mock = new MockAdapter(axios);

export const thunkGetFishermanData = () => async (dispatch: Dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    const response = await axios.get(`${API_URL}/fisherman-list`, {
      headers: headers
    });
    if (response.data) {
      dispatch(saveFishermanData(response.data));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

mock.onGet('http://fakeback.com/fisherman-list').reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([200, fisherman]);
    });
  });
});

export type FishermanActionTypes = ReduxActionType<typeof saveFishermanData>;
