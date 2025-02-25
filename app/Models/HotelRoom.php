<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HotelRoom extends Model
{
    protected $fillable = [
        'room_id',
        'room_type',
        'status',
        'price',
        'persons',
        'hotel_id',
    ];
    
    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'hotel_id');
    }
}
