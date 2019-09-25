
<!-- a localhost port on the left and the exposed internal port on the right. -->
<!-- Phase 0 -->

<!-- build and run the Docker image nginx -->
docker container run --name nginx2 -d -p 80:80 nginx 
docker container run --name nginx3 -d -p 4540:80 nginx 
docker container run --name nginx4 -d -p 846530:80 nginx 
docker container run --name nginx9 -d -p 846530:80 nginx 
docker container run --name nginx7 -d -p 846530:80 nginx 
docker container run --name nginx5 -d -p 845630:80 nginx 
docker container run --name nginx8 -d -p 84340:80 nginx 
 
<!-- build and run the Docker image httpd -->
docker container run --name httpd2 -d -p 8080:80 httpd 

<!-- build and run the Docker image  mysql-->
docker container run --name mysql4 -p 3306:33060 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql 

<!-- Interacting with the Shell -->
docker container run -it --name web nginx bash

docker container start web

docker container exec -it web bash

<!-- Phase B: Who-buntu? U-buntu! -->
docker container run -it --name ubuntu2 ubuntu bash


apt-get update 

apt-get install -y curl 

curl parrot.live

exit

docker container ls

<!-- make a new ubuntu container  -->
docker container run -it --name notliketheother ubuntu bash

<!-- test to make shure the the curl is not installed -->
 curl parrot.live <!-- bash: curl: command not found -->
<!-- apt-get install -y curl -->

<!-- Phase 2: Quote Generator -->

docker container run -d --name quotes10 alpine /bin/sh -c "while :; do wget -q0- http://quotesondesign.com/wp-json/posts; printf '\n'; sleep 5s; done"
docker container inspect quotes

<!-- Phase 3: Networks-->
docker network ls

docker network create -d bridge my-bridge-network

docker container run --net my-bridge-network -d --net-alias foo2 elasticsearch:2

docker container run --net my-bridge-network  alpine nslookup foo

docker container inspect nostalgic_minsky
docker container inspect peaceful_leakey


docker container run --net my-bridge-network alpine nslookup foo 



docker container run --net my-bridge-network centos curl -s foo:9200 

<!-- restart -->
docker container start -i agitated_jepsen

<!-- Phase 4 -->

docker container run -d --name DogsRGood nginx

docker container exec -it DogsRGood bash

mkdir rad
touch rad/randomrad.txt
echo "hello world" >> rad/randomrad.txt


docker container run -it \
  --name DogsRGood6 \
  --mount type=bind,source="$(pwd)",target="/Users/anushsaroyan/Desktop/docker intro/rad/randomrad" \
  nginx bash
 
 rm -rf 

 /Users/anushsaroyan/Desktop/docker intro/rad



docker container run --name psql-data -e POSTGRES_PASSWORD=1 -d -v mypsql:/var/lib/postgresql/data postgres:9.6.1
docker container logs psql-data
docker volume inspect mypsql
docker volume ls

docker container exec -it a10524d6b38d psql -U postgres 

<!-- 
    CREATE TABLE cats
    (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL
    );

    -- cat seeding
    INSERT INTO
    cats (name)
    VALUES
    ('Jet');



 -->


 select * from cats

 docker container run --name psql-data2 -e POSTGRES_PASSWORD=1 -d -v mypsql:/var/lib/postgresql/data postgres:9.6.2

docker container exec -it db72de646aaa psql -U postgres 

docker container rm -f


<!-- docker container stop psql-data2 psql-data DogsRGood6 DogsRGood5 DogsRGood4 DogsRGood3 DogsRGood2 DogsRGood agitated_jepsen zen_torvalds stupefied_mclean great_matsumoto crazy_williamson exciting_shtern quotes11 quotes10 aaa wizardly_chatelet nostalgic_minsky peaceful_leakey
 docker container rm psql-data2 psql-data DogsRGood6 DogsRGood5 DogsRGood4 DogsRGood3 DogsRGood2 DogsRGood agitated_jepsen zen_torvalds stupefied_mclean great_matsumoto crazy_williamson exciting_shtern quotes11 quotes10 aaa wizardly_chatelet nostalgic_minsky peaceful_leakey -->

docker volume prune

docker kill $(docker ps -q)