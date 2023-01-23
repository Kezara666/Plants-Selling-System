package com.weed.weed.repo;

import com.weed.weed.entitiy.*;
import org.springframework.data.jpa.repository.*;

public interface UserRepo extends JpaRepository<User,Integer>  {
}
