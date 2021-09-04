import axios from 'axios';


class ProcessAPI {

  host: string;
  port: number;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
  }

  async getProcessList() {
    const baseAPI = axios.create({
      baseURL: `http://${this.host}:${this.port}/`
    });
    return baseAPI.get('procs')
  }

}

export default ProcessAPI;
