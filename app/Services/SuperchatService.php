<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class SuperchatService
{
    protected $client;
    protected $apiKey;
    protected $baseUrl;

    public function __construct()
    {
        $this->client = new Client();
        $this->apiKey = env('SUPERCHAT_API_KEY'); // Store API key in .env
        $this->baseUrl = 'https://api.superchat.com/v1.0/messages';
    }

    public function sendWhatsAppMessage($phoneNumber, $templateId, $variables)
    {
        try {
            $response = $this->client->post($this->baseUrl, [
                'json' => [
                    'to' => [['identifier' => $phoneNumber]],
                    'from' => ['channel_id' => env('SUPERCHAT_CHANNEL_ID')],
                    'content' => [
                        'type' => 'whats_app_template',
                        'template_id' => $templateId,
                        'variables' => $this->formatVariables($variables),
                    ],
                ],
                'headers' => [
                    'X-API-KEY' => $this->apiKey,
                    'accept' => 'application/json',
                    'content-type' => 'application/json',
                ],
            ]);

            return json_decode($response->getBody(), true);
        } catch (RequestException $e) {
            return [
                'error' => true,
                'message' => $e->getMessage(),
            ];
        }
    }

    private function formatVariables($variables)
    {
        $formatted = [];
        foreach ($variables as $index => $value) {
            $formatted[] = [
                'position' => $index + 1,
                'value' => $value,
            ];
        }
        return $formatted;
    }
}
