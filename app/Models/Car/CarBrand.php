<?php

namespace App\Models\Car; 

use Illuminate\Database\Eloquent\Model;

class CarBrand extends Model
{
    protected $table = 'car_brands';

    protected $fillable =[
        'name'
    ];
}
