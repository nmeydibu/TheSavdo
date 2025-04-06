create table Customers (
    customer_id   serial primary key,
    name          varchar(255),
    phone         varchar(20) not null,
    address       text
);

create table Products (
    product_id    serial primary key,
    name          varchar(255)
);

create table Orders (
    order_id      serial primary key,
    customer_id   int references Customers(customer_id),
    product_id    int references Products(product_id),
    order_date    timestamp default now()
);