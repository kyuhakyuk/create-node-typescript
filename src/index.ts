import 'dotenv/config';
import app from './createExpressApp';

const port = process.env.PORT || 8080;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at ${port} in ${process.env.MODE} mode`);
});
