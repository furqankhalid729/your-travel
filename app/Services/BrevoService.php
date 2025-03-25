<?php

namespace App\Services;

use SendinBlue\Client\Configuration;
use SendinBlue\Client\Api\TransactionalEmailsApi;
use GuzzleHttp\Client;
use SendinBlue\Client\Model\SendSmtpEmail;
use Exception;
use Illuminate\Support\Facades\Log;
class BrevoService
{
    protected $apiInstance;

    public function __construct()
    {
        $config = Configuration::getDefaultConfiguration()->setApiKey('api-key', env('BREVO_API_KEY'));
        $this->apiInstance = new TransactionalEmailsApi(new Client(), $config);
    }

    /**
     * Send an email via Brevo API
     */
    public function sendEmail($to, $templateId, $params = [], $fromEmail = null, $fromName = null)
    {
        $sendSmtpEmail = new SendSmtpEmail();
        $sendSmtpEmail->setTo([['email' => $to]]);
        $sendSmtpEmail->setTemplateId($templateId);
        $sendSmtpEmail->setParams($params);

        if ($fromEmail && $fromName) {
            $sendSmtpEmail->setSender(['email' => $fromEmail, 'name' => $fromName]);
        } else {
            $sendSmtpEmail->setSender(['email' => env('MAIL_FROM_ADDRESS'), 'name' => env('MAIL_FROM_NAME')]);
        }

        try {
            return $this->apiInstance->sendTransacEmail($sendSmtpEmail);
        } catch (Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function sendPlainTextEmail($to, $subject, $content, $fromEmail = null, $fromName = null)
    {
        $sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail();

        $sendSmtpEmail->setTo([['email' => $to]]);
        $sendSmtpEmail->setSubject($subject);
        $sendSmtpEmail->setTextContent($content); // Sending plain text content

        if ($fromEmail && $fromName) {
            $sendSmtpEmail->setSender(['email' => $fromEmail, 'name' => $fromName]);
        } else {
            $sendSmtpEmail->setSender([
                'email' => env('MAIL_FROM_ADDRESS', 'your-default-email@example.com'),
                'name' => env('MAIL_FROM_NAME', 'Your App Name')
            ]);
        }

        try {
            return $this->apiInstance->sendTransacEmail($sendSmtpEmail);
        } catch (Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
