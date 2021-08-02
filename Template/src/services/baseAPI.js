import Remote from './remote';

class baseAPI {
  async getDataAccount() {
    console.log("requset:")
    const response = await Remote.get('/apiservices/autosuggest/v1.0/UK/GBP/en-GB/zxc',{params:{query: 'Stockholm'}});
    console.log("response:",response)
    return response;
  }
}

export default new baseAPI();
