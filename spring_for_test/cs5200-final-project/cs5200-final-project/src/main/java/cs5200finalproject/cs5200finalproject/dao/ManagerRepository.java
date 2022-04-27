package cs5200finalproject.cs5200finalproject.dao;


import cs5200finalproject.cs5200finalproject.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4401")
public interface ManagerRepository extends JpaRepository<Manager, Long> {
}
