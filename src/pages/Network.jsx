import React from 'react'


import BandwidthMonitor from '../components/BandwidthMonito/BandwidthMonito'
import ApiTeste from '../components/ApiTeste/ApiTeste'
import NetworkStatus from '../components/NetworkStatus/NetworkStatus'
import ServiceStatus from '../components/ServiceStatus/ServiceStatus'

const Network = () => {
  return (
    <>
    <div>
   <NetworkStatus />
   <BandwidthMonitor />
    <ApiTeste />
    <ServiceStatus />
   </div>
   </>
  )
}

export default Network