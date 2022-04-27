drop database final_project;

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











