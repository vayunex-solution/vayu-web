'use client';

import React from 'react';
import ServiceSubpageTemplate from '../../../../components/common/ServiceSubpageTemplate';

export default function NlpLlmPage() {
  return (
    <ServiceSubpageTemplate
      serviceName="Generative AI, NLP & LLM Systems"
      parentService="AI & Data Science"
      parentUrl="/services/ai-data-science"
      currentUrl="/services/ai-data-science/nlp-llm"
      accentColor="#8B5CF6"
      badgeText="Generative AI"
      headline="Enterprise Retrieval-Augmented Generation (RAG) & Custom LLMs"
      subheadline="Build intelligent agents that understand your proprietary company knowledge. We develop production-grade RAG systems, document intelligence pipelines, and fine-tuned AI workflows with zero hallucination guardrails."
      capabilities={[
        {
          icon: '📚',
          title: 'Enterprise Vector RAG Pipelines',
          desc: 'Connect your internal documentation, PDFs, Notion workspaces, and SQL databases into hybrid vector search engines (pgvector, Pinecone, Qdrant) with accurate source citations.'
        },
        {
          icon: '🤖',
          title: 'Fine-Tuned Open-Weights LLMs',
          desc: 'Train custom LLaMA 3, Mistral, and DeepSeek models on your domain terminology to operate privately on your self-hosted GPUs without per-token API fees.'
        },
        {
          icon: '📑',
          title: 'Intelligent Document Processing (IDP)',
          desc: 'Extract structured JSON from complex invoices, contracts, medical reports, and legal filings with 99.4% field-level accuracy.'
        },
        {
          icon: '🛡️',
          title: 'Guardrails & Hallucination Defense',
          desc: 'Implement programmatic semantic guardrails (NeMo, Llama-Guard) to prevent prompt injection, data leaks, and compliance violations.'
        }
      ]}
      techStack={[
        'LangChain & LlamaIndex',
        'OpenAI & Anthropic Claude',
        'Meta LLaMA 3 & Mistral',
        'Pinecone & pgvector',
        'Hugging Face',
        'FastAPI & vLLM',
        'Docker GPU',
        'AWS Bedrock'
      ]}
      processSteps={[
        {
          step: 'Knowledge Corpus Ingestion',
          desc: 'We extract, clean, and chunk enterprise unstructured documents into optimized semantic chunks.'
        },
        {
          step: 'Hybrid Retrieval Tuning',
          desc: 'Combine BM25 keyword matching with dense neural embeddings for high-precision retrieval accuracy.'
        },
        {
          step: 'Prompt Engineering & Guardrails',
          desc: 'Implement strict response templates, zero-shot classifiers, and automated hallucination validators.'
        },
        {
          step: 'Low-Latency Serving',
          desc: 'Deploy with vLLM or streaming WebSocket endpoints delivering token generation speeds > 60 tokens/sec.'
        }
      ]}
      faqs={[
        {
          question: 'Will our proprietary company documents be used to train public AI models?',
          answer: 'Never. We deploy zero-retention private enterprise instances or self-hosted open-source models inside your secure cloud perimeter so your private IP is completely shielded.'
        },
        {
          question: 'How do you prevent the AI from generating hallucinations?',
          answer: 'We utilize strict ground-truth verification and citation grounding. If the answer cannot be verified directly in your retrieved knowledge chunks, the model gracefully admits ignorance rather than inventing facts.'
        }
      ]}
    />
  );
}
