import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Settings, LogOut } from 'lucide-react'

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">GPLinks Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Settings</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="url">URL</TabsTrigger>
              <TabsTrigger value="ads">Ads</TabsTrigger>
              <TabsTrigger value="payout">Payout</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <Switch id="maintenance-mode" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-name">Site Name</Label>
                    <Input id="site-name" placeholder="GPLinks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-description">Site Description</Label>
                    <Textarea id="site-description" placeholder="URL shortener and link management platform" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-language">Default Language</Label>
                    <Select>
                      <SelectTrigger id="default-language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Save General Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="url">
              <Card>
                <CardHeader>
                  <CardTitle>URL Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-redirect">Default Redirect</Label>
                    <Select>
                      <SelectTrigger id="default-redirect">
                        <SelectValue placeholder="Select redirect type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="direct">Direct</SelectItem>
                        <SelectItem value="frame">Frame</SelectItem>
                        <SelectItem value="splash">Splash Page</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url-length">Short URL Length</Label>
                    <Slider id="url-length" min={4} max={10} step={1} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-custom-urls">Enable Custom URLs</Label>
                    <Switch id="enable-custom-urls" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-qr-codes">Enable QR Codes</Label>
                    <Switch id="enable-qr-codes" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blacklisted-domains">Blacklisted Domains</Label>
                    <Textarea id="blacklisted-domains" placeholder="Enter domains to blacklist, one per line" />
                  </div>
                  <Button>Save URL Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ads">
              <Card>
                <CardHeader>
                  <CardTitle>Ad Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-ads">Enable Ads</Label>
                    <Switch id="enable-ads" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ad-network">Ad Network</Label>
                    <Select>
                      <SelectTrigger id="ad-network">
                        <SelectValue placeholder="Select ad network" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google AdSense</SelectItem>
                        <SelectItem value="media">Media.net</SelectItem>
                        <SelectItem value="propeller">PropellerAds</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ad-code">Ad Code</Label>
                    <Textarea id="ad-code" placeholder="Enter your ad network code here" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interstitial-ad-frequency">Interstitial Ad Frequency</Label>
                    <Input id="interstitial-ad-frequency" type="number" placeholder="3" />
                  </div>
                  <Button>Save Ad Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payout">
              <Card>
                <CardHeader>
                  <CardTitle>Payout Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="payout-threshold">Minimum Payout Threshold ($)</Label>
                    <Input id="payout-threshold" type="number" placeholder="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payout-method">Default Payout Method</Label>
                    <Select>
                      <SelectTrigger id="payout-method">
                        <SelectValue placeholder="Select payout method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="crypto">Cryptocurrency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payout-fee">Payout Fee (%)</Label>
                    <Input id="payout-fee" type="number" placeholder="2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payout-schedule">Payout Schedule</Label>
                    <Select>
                      <SelectTrigger id="payout-schedule">
                        <SelectValue placeholder="Select payout schedule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Save Payout Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-captcha">Enable CAPTCHA</Label>
                    <Switch id="enable-captcha" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="captcha-type">CAPTCHA Type</Label>
                    <Select>
                      <SelectTrigger id="captcha-type">
                        <SelectValue placeholder="Select CAPTCHA type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recaptcha">reCAPTCHA</SelectItem>
                        <SelectItem value="hcaptcha">hCaptcha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="captcha-site-key">CAPTCHA Site Key</Label>
                    <Input id="captcha-site-key" type="text" placeholder="Enter CAPTCHA site key" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="captcha-secret-key">CAPTCHA Secret Key</Label>
                    <Input id="captcha-secret-key" type="password" placeholder="Enter CAPTCHA secret key" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-2fa">Enable Two-Factor Authentication</Label>
                    <Switch id="enable-2fa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-attempts">Max Login Attempts</Label>
                    <Input id="login-attempts" type="number" placeholder="5" />
                  </div>
                  <Button>Save Security Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}