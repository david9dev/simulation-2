 create table if not exists houses(
    id serial primary key,
    name varchar(50),
    address varchar(100),
    city varchar(50),
    state varchar(20),
    zip integer,
    image_url text,
    monthly_mor decimal,
    monthly_rent decimal
);
select * from houses;