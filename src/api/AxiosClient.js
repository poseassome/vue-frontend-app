import axios from 'axios';

const baseDomain = 'https://taling.projectlion.lkaybob.pe.kr/api';
const baseURL = `${baseDomain}`;
const token = 'nm1Hz3kpcpTMQNuTfsLgnT6oySGvEjD9sug8oAm7d21YmpTjV9eKppoLjOBnjt7XPYlgLaZ7fHc6Z4Plf3G47xwG0r0d3kYvBkRP8Illei9dgGVvKF2oiWj47IBMYGchd25RWCGBvLQQmnI74vLK6B7BnWbP71WQ4scpp966X10ehblSLy3oIwtWTRYWMvPp5iTXMfjhYgtoR7cz6ko3zuLiAov7qaS9FWrTwXtFgX0xuL6v73M15lAXU3AeHqDX';

export default axios.create({
  baseURL,
  // auth: {
  //   username: 'web-app',
  //   password: 'abcd1234',
  // },
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
