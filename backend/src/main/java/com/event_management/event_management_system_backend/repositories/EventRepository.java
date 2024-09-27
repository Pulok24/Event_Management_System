package com.event_management.event_management_system_backend.repositories;

import com.event_management.event_management_system_backend.model.Event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByUsername(String username);
    
    @Query("select e from Event e where e.name=?1 AND e.city=?2")
//    @Query("SELECT * FROM Event WHERE name =?1 AND city =?2 AND date =?3")
    List<Event> findEvent(String name, String city);
}
