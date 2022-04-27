drop database if exists final_project;

create database if not exists final_project;

use final_project;

create table Manager(
Manager_id int primary key auto_increment,
firstName varchar(64) not null,
lastName varchar(64) not null,
email varchar(64) not null,
Gender varchar(64) not null
);

create table Customer(
Customer_id int primary key auto_increment,
firstName varchar(64) not null,
lastName varchar(64) not null,
Company varchar(64) not null,
email varchar(64) not null,
Description varchar(64) not null,
ideaPrice int,
Manager_id int not null,
foreign key (Manager_id) references Manager(Manager_id) on delete cascade on update cascade
);

create table Provider(
Provider_id int primary key auto_increment,
Company_name varchar(64) not null,
Type enum('Design', 'Tech'),
teamSize int not null,
quotedPrice int not null,
officialWebsite varchar(200) not null,
Frontend bool,
Backend bool,
Data_analysis bool,
UI bool,
Logo bool,
Illustration bool
);

create table Product(
Product_id int primary key auto_increment,
Date date not null,
Website varchar(200) not null,
isDemo bool not null,
Description varchar(200) not null,
Provider_id int not null,
foreign key (Provider_id) references Provider(Provider_id) on delete cascade on update cascade
);

create table Orders(
Order_id int primary key auto_increment,
Price int not null,
Time date not null,
isComplete bool not null,
applicationType enum('Mobile', 'System', 'Web'),
Platform varchar(64),
machineLearning bool,
dataMining bool,
Maintenance varchar(64),
SaaS bool,
Backstage bool,
Provider_id int not null,
Manager_id int not null,
foreign key (Provider_id) references Provider(Provider_id) on delete cascade on update cascade,
foreign key (Manager_id) references Manager(Manager_id) on delete cascade on update cascade
);


insert into Manager
values
(1, "Kevin", "Shen", "ks123456@northeastern.edu", "Male"),
(2, "Chris", "Wang", "cw123456@northeastern.edu", "Male"),
(3, "Joyce", "Chen", "cj123456@northeastern.edu", "Female"),
(4, "Anna", "Wang", "ayu123456@northeastern.edu", "Female"),
(5, "Angula", "Yu", "ayu123456@northeastern.edu", "Female")
;


insert into Customer
values
(1, "Elon", "Musk", "Tesla", "em123456@gmail.com", "Tesla CEO", 1000000, 1),
(2, "Huateng", "Ma", "Tecent", "hm123456@gmail.com", "Tecent CEO", 888888, 2),
(3, "Bill", "Gates", "Microsoft", "bg123456@gmail.com", "Microsoft CEO", 999999, 4),
(4, "Sundar", "Pichai", "Google", "sp123456@gmail.com", "Google CEO", 7000000, 1),
(5, "Andy", "Jassy", "Amazon", "aj123456@gmail.com", "Amazon CEO", 9800000, 3),
(6, "Tim", "Cook", "Apple", "tc123456@gmail.com", "Apple CEO", 6666666, 5),
(7, "Mark", "Zuckerberg", "Meta", "mz123456@gmail.com", "Meta CEO", 777777, 2)
;

insert into provider
values
(1, "provider 1", 'Design', 100, 20000, "provider1@gmail.com", true, true, false, true, true, true),
(2, "provider 2", 'Design', 40, 90000, "provider2@gmail.com", true, false, false, true, false, true),
(3, "provider 3", 'Tech', 10, 30000, "provider3@gmail.com", false, true, true, false, false, false),
(4, "provider 4", 'Tech', 60, 10000, "provider4@gmail.com", true, true, false, true, false, false),
(5, "provider 5", 'Design', 20, 50000, "provider5@gmail.com", true, true, true, false, false, true)
;

insert into Product
values
(1, STR_TO_DATE('2-1-2021', "%m-%d-%Y"), "product1@gmail.com", true, "web development product 1", 1),
(2, STR_TO_DATE('10-15-2022', "%m-%d-%Y"), "product2@gmail.com", false, "web development product 2", 1),
(3, STR_TO_DATE('11-30-2019', "%m-%d-%Y"), "product3@gmail.com", true, "machine learning product 3", 3),
(4, STR_TO_DATE('3-8-2022', "%m-%d-%Y"), "product4@gmail.com", false, "machine learning product 4", 3),
(5, STR_TO_DATE('5-3-2021', "%m-%d-%Y"), "product5@gmail.com", true, "web development and ml product 5", 4)
;


insert into Orders
values
(1, 300000, STR_TO_DATE('10-1-2020', "%m-%d-%Y"), false, 'System', 'platform 1', true, true, 'maintenance', false, false, 2, 1),
(2, 400000, STR_TO_DATE('11-1-2021', "%m-%d-%Y"), true, 'Web', 'platform 2', true, true, 'maintenance', true, false, 1, 2),
(3, 500000, STR_TO_DATE('2-1-2020', "%m-%d-%Y"), false, 'Mobile', 'platform 3', true, true, 'maintenance', false, true, 3, 1),
(4, 600000, STR_TO_DATE('11-1-2020', "%m-%d-%Y"), true, 'Web', 'platform 2', false, false, 'maintenance', true, false, 5, 4),
(5, 700000, STR_TO_DATE('8-1-2021', "%m-%d-%Y"), false, 'Mobile', 'platform 4', true, true, 'maintenance', false, false, 4, 5)
;









