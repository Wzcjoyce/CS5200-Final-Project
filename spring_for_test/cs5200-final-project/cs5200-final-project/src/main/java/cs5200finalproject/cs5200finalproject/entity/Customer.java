package cs5200finalproject.cs5200finalproject.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="customer")
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Customer_id")
    private Long Customer_id;

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    private Manager manager;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "company")
    private String company;

    @Column(name = "email")
    private String email;

    @Column(name = "description")
    private String description;

    @Column(name = "idealprice")
    private boolean idealprice;


}