<?php namespace App\Controllers;

use App\Models\ProductModel;
use CodeIgniter\Controller;

class Product extends Controller
{
    public function index()
    {
        $model = new ProductModel();

        $data = [
            'product' => $model->getProduct(),
            'title' => 'Product Archief'
        ];

        echo view('templates/header', $data);
        echo view('products/overview', $data);
        echo view('templates/footer', $data);
    }

    public function view($slug = null)
    {
        $model = new ProductModel();

        $data['info'] = $model->getProduct($slug);
    }
}
