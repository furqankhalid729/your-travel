<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $fillable = [
        'name',
        'description',
        'location',
        'food',
        'types',
        'facilities',
        'images',
    ];

    protected $casts = [
        'types' => 'array',
        'facilities' => 'array',
        'images' => 'array',
    ];

    public function rooms()
    {
        return $this->hasMany(HotelRoom::class, 'hotel_id');
    }
}
