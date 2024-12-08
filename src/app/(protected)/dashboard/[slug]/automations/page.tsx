'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, MessageSquare, Clock, Users, ArrowRight, Power } from 'lucide-react'

type Automation = {
  id: string
  name: string
  description: string
  type: 'message' | 'schedule' | 'audience'
  status: 'active' | 'inactive'
  triggers: number
  lastRun?: string
}

const initialAutomations: Automation[] = [
  {
    id: '1',
    name: 'Welcome Message',
    description: 'Sends a welcome message to new subscribers',
    type: 'message',
    status: 'active',
    triggers: 156,
    lastRun: '2 hours ago'
  },
  {
    id: '2',
    name: 'Weekly Newsletter',
    description: 'Scheduled newsletter every Monday',
    type: 'schedule',
    status: 'active',
    triggers: 52,
    lastRun: '3 days ago'
  },
  {
    id: '3',
    name: 'Re-engagement Campaign',
    description: 'Target inactive users after 30 days',
    type: 'audience',
    status: 'inactive',
    triggers: 89,
    lastRun: '1 week ago'
  },
]

export default function Automations() {
  const [automations, setAutomations] = useState<Automation[]>(initialAutomations)
  const [searchTerm, setSearchTerm] = useState('')

  const getTypeIcon = (type: Automation['type']) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="h-4 w-4" />
      case 'schedule':
        return <Clock className="h-4 w-4" />
      case 'audience':
        return <Users className="h-4 w-4" />
    }
  }

  const filteredAutomations = automations.filter(automation =>
    automation.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="h-full bg-background text-white p-6">
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search automations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#003322] border-gray-800 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAutomations.map((automation) => (
          <Card key={automation.id} className="bg-[#003322] border-gray-800 hover:border-green-500/50 transition-colors cursor-pointer group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(automation.type)}
                  <Badge variant={automation.status === 'active' ? 'default' : 'secondary'} className={automation.status === 'active' ? 'bg-green-500' : 'bg-gray-700'}>
                    {automation.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="mt-3">{automation.name}</CardTitle>
              <CardDescription className="text-gray-400">{automation.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{automation.triggers} triggers</span>
                {automation.lastRun && <span>Last run: {automation.lastRun}</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAutomations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No automations found. Try a different search term.</p>
        </div>
      )}
    </div>
  )
}

