/* eslint-disable prettier/prettier */
import sanityClient from '@sanity/client';


const options = {
  projectId: 'ivfc06wn',
  dataset: 'production',
  token:
    'skvutUoUINoYaBAzHJiouBpQQt2Dd2YqkY808vlP55kK0hgNKhwzglzC8jwCTGbElf9DodnzJGfJv5637LHrQdEj0IpfFSIQq0Qea2qjD69krB1S9KIT7WfO0TN5hkzki6QetMWjeB8bnm31drFuKMJ2fOEf0HpdqtuyCEutPcV2RHlPNuzJ',
apiVersion: '2021-03-25',
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;