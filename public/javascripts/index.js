async function myfunction() {
  const result = await axios({
    url: '/get_all_listings',
    method: 'GET',
  });
  const json_result = result.data;
  console.log(json_result);
  $("#info").text(JSON.stringify(json_result)); // jquery call
}