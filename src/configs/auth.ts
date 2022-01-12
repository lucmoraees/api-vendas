const jwt = {
  secret: process.env.APP_SECRET,
  expiresIn: '356d',
};

export default {
	jwt,
};
 