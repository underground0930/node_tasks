import axios from 'axios';

type Props = {
  url: string;
  param: {
    pg: number;
  };
};

const getApiData = async <T>({
  url,
  param,
}: Props): Promise<{
  data?: T;
  error: boolean;
}> => {
  try {
    const result = await axios({
      method: 'get',
      url,
      params: {
        ...param,
        _: Date.now(),
      },
    });
    if (result.statusText !== 'OK') {
      new Error('error');
    }
    return {
      data: result.data,
      error: false,
    };
  } catch (e) {
    console.log(e);
    return {
      error: true,
    };
  }
};

export default getApiData;
