<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['booking_id', 'amount', 'status', 'note'];

    protected $casts = [
        'note' => AsArrayObject::class, // Cast JSON field as an array object
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    /**
     * Get the transactions related to this payment.
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }
}
