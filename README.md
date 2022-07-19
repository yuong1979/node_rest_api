Based on fireship tutorial - https://youtu.be/-MTSQjw5DrM
Docker based on tutorial from Ben Awad - https://youtu.be/0N3n56KsC28

run below commands without docker
npm install
npm start

To run with docker
docker build -t testing:1 .
docker run -p 8080:8080 testing:1

Stop docker
docker container ls
docker stop <id of container>


