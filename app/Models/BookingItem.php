<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingItem extends Model {
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'name',
        'price',
        'additional_info'
    ];

    protected $casts = [
        'additional_info' => 'array',
    ];

    public function booking() {
        return $this->belongsTo(Booking::class);
    }
}
