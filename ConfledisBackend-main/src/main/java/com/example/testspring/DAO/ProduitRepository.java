package com.example.testspring.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepository  extends JpaRepository<Produit,Integer> {

    List<Produit> findByNom(String nom);
}
