fetch('https://otp.dev/api/verify/'', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + btoa('mtbi2w4hlendfpxa1igthcu5p6mzxf7k:mpktanoshzf4c81e3bydjl76ixr9wugv'),
    'Content-Type': 'multipart/form-data',
  },
  body: new FormData({
    channel: 'email',
    email: 'ali@getotp.test',
    callback_url: '(link unavailable)',
    success_redirect_url: 'https://x.com/the_developer03?t=GIbB15XOAiZ7Q3tFcv-HKg&s=09',
    fail_redirect_url: '(link unavailable)',
    metadata: '{"order_id":"xfdu48sfdjsdf", "agent_id":2258}',
    captcha: 'true',
    hide: 'true',
    lang: 'ja',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));