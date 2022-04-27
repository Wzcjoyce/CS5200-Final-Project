package cs5200finalproject.cs5200finalproject.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "manager")
@Getter
@Setter
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "manager_id")
    private Long Manager_id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private String gender;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "manager")
    private Set<Customer> customers;
}
