<?php
    class Account {
        public $dunkin_aid ;
        public $dunkin_active ;
        public $dunkin_key ;
        public $dunkin_fullname ;
        public $dunkin_email ;
        public $dunkin_password ;
        public $dunkin_datetime ;

        public $connection ;
        public $tblDunkinAccount;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblDunkinAccount = "dunkin";
        }

        public function create() {
            $sql = "insert into {$this->tblDunkinAccount} ";     
            $sql .= "( dunkin_active, ";      
            $sql .= "dunkin_key, ";     
            $sql .= "dunkin_fullname, "; 
            $sql .= "dunkin_email, "; 
            $sql .= "dunkin_password, "; 
            $sql .= "dunkin_datetime ) values ( ";
            $sql .= "'{$this->dunkin_active}', ";
            $sql .= "'{$this->dunkin_key}', ";
            $sql .= "'{$this->dunkin_fullname}', ";
            $sql .= "'{$this->dunkin_email}', ";
            $sql .= "'{$this->dunkin_password}', ";
            $sql .= "'{$this->dunkin_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblDunkinAccount} set ";
            $sql .= "dunkin_key = '', ";
            $sql .= "dunkin_password = '{$this->dunkin_password}', ";
            $sql .= "dunkin_active = 1, ";
            $sql .= "dunkin_datetime = '{$this->dunkin_datetime}' ";

            $sql .= "where dunkin_key = '{$this->dunkin_key}' ";
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        // update cus id
        public function updateCusId() {
            $sql = "update {$this->tblDunkinAccount} set ";
            $sql .= "dunkin_cus_id = '{$this->dunkin_cus_id}', ";
            $sql .= "dunkin_datetime = '{$this->dunkin_datetime}' ";

            $sql .= "where dunkin_email = '{$this->dunkin_email}' ";
            $sql .= "and dunkin_active = 1 ";
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        // update forgot password
        public function updateForgotPassword() {
            $sql = "update {$this->tblDunkinAccount} set ";
            $sql .= "dunkin_key = '{$this->dunkin_key}', ";
            $sql .= "dunkin_datetime = '{$this->dunkin_datetime}' ";

            $sql .= "where dunkin_email = '{$this->dunkin_email}' ";
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        // read key 
        public function readKey() {
            $sql = "select * from {$this->tblDunkinAccount} ";
            $sql .= "where dunkin_key = '{$this->dunkin_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblDunkinAccount} ";
            $sql .= "where dunkin_email = '{$this->dunkin_email}' ";
            $sql .= "and dunkin_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblDunkinAccount} set ";
            $sql .= "dunkin_active = '0', ";
            $sql .= "dunkin_datetime = '{$this->dunkin_datetime}' ";
            $sql .= "where dunkin_aid  = '{$this->dunkin_aid}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;
    
            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function isEmailExist() {
            $sql = "select * from {$this->tblDunkinAccount} ";
            $sql .= "where dunkin_email = '{$this->dunkin_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblDunkinAccount} ";
            $sql .= "where dunkin_email = '{$this->dunkin_email}' ";
            $sql .= "and dunkin_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }