package cs5200finalproject.cs5200finalproject.dao;

import cs5200finalproject.cs5200finalproject.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4401")
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
