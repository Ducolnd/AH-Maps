<?php namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model {
    protected $table = 'products';

    public function getProduct($slug = false) {
        if($slug == false) {
            return $this->findAll();
        }

        return $this->asArray()
                    ->where(['slug' => $slug])
                    ->first();
    }

}