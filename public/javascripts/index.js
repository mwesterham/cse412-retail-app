async function myfunction() {
  const result = await axios({
    url: '/get_profile',
    method: 'GET',
  });
  const json_result = result.data;
  console.log(json_result);
}