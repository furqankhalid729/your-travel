<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['payment_id', 'type', 'amount', 'note'];

    protected $casts = [
        'note' => AsArrayObject::class, // Cast JSON field as an array object
    ];

    /**
     * Get the payment that owns this transaction.
     */
    public function payment(): BelongsTo
    {
        return $this->belongsTo(Payment::class);
    }
}
