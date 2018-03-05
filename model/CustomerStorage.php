<?php

class CustomerStorage
{
    protected $_file = 'storage/customers.json';
    protected $_fp;
    protected $_customers;

    public function __construct()
    {
        $this->_file = dirname(__DIR__) . '/' . $this->_file;
        if (!file_exists($this->_file)) {
            $fp = fopen($this->_file, 'rw+');
            fwrite($fp, json_encode([]));
            fclose($fp);
        }
    }

    public function getCustomer($email)
    {
        $customers = $this->_getCustomers();
        if (isset($customers[$email])) {
            return $customers[$email];
        }

        return [];
    }

    public function isEmailTaken($email)
    {
        return (bool) array_key_exists($email, $this->_getCustomers());
    }

    public function addCustomer($customerData)
    {
        $customers = $this->_getCustomers();
        $customers[$customerData['email']] = $customerData;
        file_put_contents($this->_file, json_encode($customers));
    }

    protected function _getCustomers()
    {
        if (is_null($this->_customers)) {
            $this->_customers = json_decode(file_get_contents($this->_file), true);
        }

        return $this->_customers;
    }
}