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
        'status',
        'phone_number', 'customer_data', 'extras',
    ];

    protected $casts = [
        'customer_data' => 'array',
        'extras' => 'array',
    ];

    public function items() {
        return $this->hasMany(BookingItem::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
