drop table exists product;

create table products (
 product_id serial primary key
 ,name varchar(40) not null
 ,description varchar(80) not null
 ,price integer not null
 ,image_url text not null
);