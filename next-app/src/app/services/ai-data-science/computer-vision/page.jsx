'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function ComputerVisionPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Computer Vision & Video Telemetry"
      parentService="AI & Data Science"
      parentUrl="/services/ai-data-science"
      currentUrl="/services/ai-data-science/computer-vision"
      accentColor="#8B5CF6"
      badgeText="Visual AI"
      headline="Industrial Computer Vision & Real-Time Video Analytics"
      subheadline="Empower your systems with human-grade visual perception. We develop custom edge AI models for manufacturing defect inspection, OCR document parsing, facial biometric verification, and security video telemetry."
      capabilities={[
        {
          icon: '🔍',
          title: 'Automated Manufacturing Defect Detection',
          desc: 'High-speed surface inspection models that catch microscopic cracks, weld flaws, and assembly errors on factory conveyor belts at 120 FPS.'
        },
        {
          icon: '📹',
          title: 'CCTV & Workplace Safety Analytics',
          desc: 'Edge-deployed video stream processing for PPE detection (hard hats, safety vests), intrusion alerts, and occupancy heatmaps.'
        },
        {
          icon: '📄',
          title: 'Neural OCR & Document Extraction',
          desc: 'Read degraded, rotated, or handwritten text from government IDs, vehicle license plates, and paper receipts with sub-pixel alignment.'
        },
        {
          icon: '⚡',
          title: 'Edge Device Optimization (Jetson / ONNX)',
          desc: 'Quantized INT8 and TensorRT model deployment on edge devices (NVIDIA Jetson, Raspberry Pi, industrial IP cameras) with sub-10ms inference.'
        }
      ]}
      techStack={[
        'YOLOv8 / YOLOv10',
        'OpenCV',
        'PyTorch Vision',
        'NVIDIA TensorRT',
        'ONNX Runtime',
        'DeepStream SDK',
        'FastAPI',
        'Edge Jetson TX2/Orin'
      ]}
      processSteps={[
        {
          step: 'Camera & Lighting Calibration',
          desc: 'Evaluate optics, shutter speeds, and field of view to capture high-contrast dataset frames.'
        },
        {
          step: 'Annotation & Synthetic Data Augmentation',
          desc: 'Label key defects and generate synthetic augmentations to train on rare manufacturing corner cases.'
        },
        {
          step: 'Model Training & Quantization',
          desc: 'Train high-accuracy convolutional and vision transformer models and quantize for hardware acceleration.'
        },
        {
          step: 'Factory Floor Edge Deployment',
          desc: 'Install real-time camera inference loop with PLC industrial controller triggers and web dashboards.'
        }
      ]}
      faqs={[
        {
          question: 'Can computer vision models run without active internet connectivity on factory floors?',
          answer: 'Yes! We optimize models to run 100% locally on on-premise edge hardware (like NVIDIA Jetson or industrial mini PCs) with zero internet dependency and sub-10ms response.'
        },
        {
          question: 'What image resolution is needed for defect detection?',
          answer: 'Standard 2MP to 5MP industrial gigabit ethernet (GigE) cameras are typically sufficient for inspecting components down to 0.1mm defect sizes.'
        }
      ]}
    />
  );
}
