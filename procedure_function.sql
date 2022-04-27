use final_project;
-- ------------------------------------ Customer ------------------------------------
drop procedure if exists addCustomer;

delimiter $$
create procedure addCustomer(in _firstname varchar(64), in _lastname varchar(64), in _company varchar(64), in _email varchar(64), in _description varchar(64), in _idealprice int, in _manager_id int)
begin
insert into Customer (Customer_id, firstName, lastName, Company, email, Description, ideaPrice, Manager_id) values (null, _firstname, _lastname, _company, _email, _description, _idealprice, _manager_id);
end
$$
delimiter ;

call addCustomer('test_first_name', 'test_last_name', 'test_company', 'test_email', 'test_desc', 1000000, 1);

select * from Customer;

drop procedure if exists deleteCustomer;

delimiter $$
create procedure deleteCustomer(in _id int)
begin
delete from Customer where Customer.Customer_id = _id;
end
$$
delimiter ;

call deleteCustomer(8);

select * from Customer;

drop procedure if exists modifyCustomer;

delimiter $$
create procedure modifyCustomer(in _id int, in _firstname varchar(64), in _lastname varchar(64), in _company varchar(64), in _email varchar(64), in _description varchar(64), in _idealprice int, in _managerid int)
begin
delete from Customer where Customer.Customer_id = _id;
insert into Customer (Customer_id, firstName, lastName, Company, email, Description, ideaPrice, Manager_id) values (_id, _firstname, _lastname, _company, _email, _description, _idealprice, _managerid);
end
$$
delimiter ;

call modifyCustomer(2, 'test_modify', 'test', 'test1', 'test@', 'test_desc', 80000, 2);

select * from Customer;

-- ------------------------------------ Manager ------------------------------------

drop procedure if exists addManager;

delimiter $$
create procedure addManager(in _firstname varchar(64), in _lastname varchar(64), in _email varchar(64), in _gender varchar(64))
begin
insert into Manager(Manager_id, firstName, lastName, email, Gender) values (null, _firstname, _lastname, _email, _gender);
end
$$
delimiter ;

call addManager('Manager_test_mysql', 'last', '11@qq.com', 'male');

select * from Manager;

drop procedure if exists deleteManager;

delimiter $$
create procedure deleteManager(in _managerid int)
begin
delete from Manager where Manager.Manager_id = _managerid;
end
$$
delimiter ;

call deleteManager(6);

select * from Manager;

drop procedure if exists modifyManager;

delimiter $$
create procedure modifyManager(in _managerid int, in _firstname varchar(64), in _lastname varchar(64), in _email varchar(64), in _gender varchar(64))
begin
delete from Manager where Manager.Manager_id = _managerid;
insert into Manager(Manager_id, firstName, lastName, email, Gender) values (_managerid, _firstname, _lastname, _email, _gender);
end
$$

delimiter ;

call modifyManager(1, 'modifytest', 'last', 'e@qq.com', 'Femal');

select * from Manager;

-- ------------------------------------ Product ------------------------------------
drop procedure if exists addProduct;

delimiter $$
create procedure addProduct(in _date date, in _website varchar(200), in _isdemo bool, in _desc varchar(200), in _providerid int)
begin
insert into Product(Product_id, Date, Website, isDemo, Description, Provider_id) values (null, _date, _website, _isdemo, _desc, _providerid);
end
$$

delimiter ;

call addProduct(STR_TO_DATE('2-1-2021', "%m-%d-%Y"), 'https://google.com', false, 'testaddproduct', 2);

select * from Product;

drop procedure if exists deleteProduct;

delimiter $$
create procedure deleteProduct(in _id int)
begin
delete from Product where Product.Product_id = _id;
end
$$

delimiter ;
call deleteProduct(6);

select * from Product;

drop procedure if exists modifyProduct;

delimiter $$
create procedure modifyProduct(in _id int, in _date date, in _website varchar(200), in _isdemo bool, in _desc varchar(200), in _providerid int)
begin
delete from Product where Product.Product_id = _id;
insert into Product(Product_id, Date, Website, isDemo, Description, Provider_id) values (_id, _date, _website, _isdemo, _desc, _providerid);
end
$$

delimiter ;

call modifyProduct(1, STR_TO_DATE('2-1-2021', "%m-%d-%Y"), 'testmodify', false, 'modifytest', 2);

select * from Product;

-- ------------------------------------ Provider ------------------------------------
select * from Provider;

drop procedure if exists deleteProvider;
delimiter $$
create procedure deleteProvider(in _id int)
begin
delete from Provider where Provider.Provider_id = _id;
end
$$

delimiter ;

call deleteProvider(4);
select * from Provider;

drop procedure if exists addProvider;
delimiter $$

create procedure addProvider(in _company varchar(64), in _type enum('Design', 'Tech'), in _teamsize int, in _quotedprice int,
in _officialweb varchar(200), in _frontend bool, in _backend bool, in _dataanalysis bool, in _ui bool, in _logo bool, in _illustration bool)
begin
insert into Provider(Provider_id, Company_name, Type, teamSize, quotedPrice, officialWebsite, Frontend, Backend, Data_analysis, UI, Logo, Illustration)
values (null, _company, _type, _teamsize, _quotedprice, _officialweb, _frontend, _backend, _dataanalysis, _ui, _logo, _illustration);
end 
$$

delimiter ;

call addProvider('testadd', 'Tech', 20, 100000, 'test.com', true, true, true, false, false, false);

select * from Provider;

drop procedure if exists modifyProvider;
delimiter $$

create procedure modifyProvider(in _id int, in _company varchar(64), in _type enum('Design', 'Tech'), in _teamsize int, in _quotedprice int,
in _officialweb varchar(200), in _frontend bool, in _backend bool, in _dataanalysis bool, in _ui bool, in _logo bool, in _illustration bool)
begin
delete from Provider where Provider.Provider_id = _id;
insert into Provider(Provider_id, Company_name, Type, teamSize, quotedPrice, officialWebsite, Frontend, Backend, Data_analysis, UI, Logo, Illustration)
values (_id, _company, _type, _teamsize, _quotedprice, _officialweb, _frontend, _backend, _dataanalysis, _ui, _logo, _illustration);
end
$$

delimiter ;

call modifyProvider(1, 'testmodify', 'Tech', 20, 100000, 'test.com', true, true, true, false, false, false);

select * from Provider;

-- ------------------------------------ Orders ------------------------------------
select * from Orders;

drop procedure if exists addOrder;
delimiter $$
create procedure addOrder(in _price int, in _time date, in _isComplete bool, in _applicationType enum('Mobile', 'System', 'Web'),
in _platform varchar(64), in _ml bool, in _dm bool, in _maintenance varchar(64), in _saas bool, in _backstage bool, in _providerId int, in _managerId int)
begin
insert into Orders(Order_id, Price, Time, isComplete, applicationType, Platform, machineLearning, dataMining, Maintenance, SaaS, Backstage, Provider_id, Manager_id)
values (null, _price, _time, _isComplete, _applicationType, _platform, _ml, _dm, _maintenance, _saas, _backstage, _providerId, _managerId);
end
$$

delimiter ;

call addOrder(2000000, STR_TO_DATE('3-1-2022', "%m-%d-%Y"), false, 'System', 'testPlatform', false, true, 'testMaintenance', true, false, 1, 2);

select * from Orders;


drop procedure if exists deleteOrder;

delimiter $$
create procedure deleteOrder(in _id int)
begin
delete from Orders where Orders.Order_id = _id;
end
$$

delimiter ;

call deleteOrder(7);

select * from Orders;

drop procedure if exists modifyOrder;

delimiter $$
create procedure modifyOrder(in _id int, in _price int, in _time date, in _isComplete bool, in _applicationType enum('Mobile', 'System', 'Web'),
in _platform varchar(64), in _ml bool, in _dm bool, in _maintenance varchar(64), in _saas bool, in _backstage bool, in _providerId int, in _managerId int)
begin
delete from Orders where Orders.Order_id = _id;
insert into Orders(Order_id, Price, Time, isComplete, applicationType, Platform, machineLearning, dataMining, Maintenance, SaaS, Backstage, Provider_id, Manager_id)
values (_id, _price, _time, _isComplete, _applicationType, _platform, _ml, _dm, _maintenance, _saas, _backstage, _providerId, _managerId);
end
$$
delimiter ;

call modifyOrder(4, 100000, STR_TO_DATE('2-1-2022', "%m-%d-%Y"), false, 'Mobile', 'modify', true, true, 'modifytest', false, true, 3, 3);

select * from Orders;

