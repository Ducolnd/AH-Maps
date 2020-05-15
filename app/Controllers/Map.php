<?php namespace App\Controllers;

use App\Models\ProductModel;
use CodeIgniter\Controller;

class Map extends Controller {
    public function index() {
        // $model = new ProductModel();

        $data = [
            'title' => 'Product Archief'
        ];

        echo view('map/maps', $data);
    }
}
