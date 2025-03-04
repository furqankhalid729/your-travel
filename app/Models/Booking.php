<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model {
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'gender',
        'identification_number',
        'address',
        'city',
        'postal_code',
        'country',
        'payment_id',
        'status'
    ];

    public function items() {
        return $this->hasMany(BookingItem::class);
    }
}
