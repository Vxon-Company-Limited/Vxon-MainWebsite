// Automatically generated exactly from User Screenshots
export type ModelType = "全部" | "对话" | "生图" | "嵌入" | "重排序" | "语音" | "视频" | "多模态" | "视觉" | "代码";
export type TagType = string;

export type ApiEndpoint = {
  provider: string;
  path: string;
  method: string;
}

export type ModelItem = {
  id: string;
  developer: string;
  type: ModelType;
  name: string;
  release: string;
  tags: TagType[];
  inputPrice: string;
  outputPrice: string;
  cacheInputPrice: string;
  cacheOutputPrice: string;
  contextLength: string;
  endpoints: ApiEndpoint[];
  description: string;
}

export const MODELS: ModelItem[] = [
  {
    "id": "deepseek-ai/DeepSeek-V3.2",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V3.2",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "Vibe Coding",
      "长文本处理"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥3 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/deepseek-ai/DeepSeek-V3.2",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V3.2",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "Vibe Coding",
      "长文本处理"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥3 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3.1-Terminal",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V3.1-Terminal",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "Vibe Coding",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥12 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/deepseek-ai/DeepSeek-V3.1-Terminal",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V3.1-Terminal",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "Vibe Coding",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥12 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-R1",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "数学推理",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/deepseek-ai/DeepSeek-R1",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-R1",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "数学推理",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-V3",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V3",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "Vibe Coding",
      "长文本处理"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/deepseek-ai/DeepSeek-V3",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V3",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "Vibe Coding",
      "长文本处理"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-OCR",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-OCR",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "多模态理解 / 识别"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-0528-Qwen-8B",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-R1-0528-Qwen-8B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "通用助手",
      "数学推理"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-R1-Distill-Qwen-32B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "旗舰全能",
      "数学推理"
    ],
    "inputPrice": "¥1.26 / M Tokens",
    "outputPrice": "¥1.26 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-R1-Distill-Qwen-14B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "通用助手",
      "数学推理"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥0.7 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-R1-Distill-Qwen-7B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "通用助手",
      "数学推理"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "deepseek-ai/DeepSeek-V2.5",
    "developer": "DeepSeek",
    "type": "对话",
    "name": "DeepSeek-V2.5",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "DeepSeek",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥1.33 / M Tokens",
    "outputPrice": "¥1.33 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "DeepSeek 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen2.5-VL-72B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2.5-VL-72B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥4.13 / M Tokens",
    "outputPrice": "¥4.13 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "fnlp/MOSS-TTSd-v0.5",
    "developer": "Fudan NLPLab",
    "type": "语音",
    "name": "MOSS-TTSd-v0.5",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Fudan NLPLab",
      "语音合成",
      "游戏互动"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥50 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Fudan NLPLab 提供的官方原生 语音 大模型"
  },
  {
    "id": "FunAudioLLM/CosyVoice2-0.5B",
    "developer": "FunAudioLLM",
    "type": "语音",
    "name": "CosyVoice2-0.5B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "FunAudioLLM",
      "语音合成",
      "游戏互动"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥50 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "FunAudioLLM 提供的官方原生 语音 大模型"
  },
  {
    "id": "FunAudioLLM/SenseVoiceSmall",
    "developer": "FunAudioLLM",
    "type": "语音",
    "name": "SenseVoiceSmall",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "FunAudioLLM",
      "语音交互"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "FunAudioLLM 提供的官方原生 语音 大模型"
  },
  {
    "id": "IndexTeam/IndexTTS-2",
    "developer": "IndexTeam",
    "type": "语音",
    "name": "IndexTTS-2",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "IndexTeam",
      "语音合成",
      "游戏互动"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥50 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "IndexTeam 提供的官方原生 语音 大模型"
  },
  {
    "id": "BAAI/bge-m3",
    "developer": "BAAI",
    "type": "嵌入",
    "name": "bge-m3",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "BAAI",
      "RAG"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "BAAI 提供的官方原生 嵌入 大模型"
  },
  {
    "id": "BAAI/bge-reranker-v2-m3",
    "developer": "BAAI",
    "type": "重排序",
    "name": "bge-reranker-v2-m3",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "BAAI",
      "RAG"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "BAAI 提供的官方原生 重排序 大模型"
  },
  {
    "id": "netease-youdao/bce-embedding-base_v1",
    "developer": "NetEase",
    "type": "嵌入",
    "name": "bce-embedding-base_v1",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "NetEase",
      "RAG"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "NetEase 提供的官方原生 嵌入 大模型"
  },
  {
    "id": "netease-youdao/bce-reranker-base_v1",
    "developer": "NetEase",
    "type": "重排序",
    "name": "bce-reranker-base_v1",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "NetEase",
      "RAG"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "NetEase 提供的官方原生 重排序 大模型"
  },
  {
    "id": "Qwen/Qwen2.5-Coder-32B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2.5-Coder-32B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "Vibe Coding"
    ],
    "inputPrice": "¥1.26 / M Tokens",
    "outputPrice": "¥1.26 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Kwai-Kolors/Kolors",
    "developer": "Kuaishou",
    "type": "生图",
    "name": "Kolors",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Kuaishou",
      "图像生成",
      "AIGC 内容创作"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Kuaishou 提供的官方原生 生图 大模型"
  },
  {
    "id": "Qwen/Qwen2-VL-72B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2-VL-72B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥4.13 / M Tokens",
    "outputPrice": "¥4.13 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen2.5-72B-Instruct-128K",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2.5-72B-Instruct-128K",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "旗舰全能",
      "文案创作",
      "长文本处理"
    ],
    "inputPrice": "¥4.13 / M Tokens",
    "outputPrice": "¥4.13 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen2.5-72B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2.5-72B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "旗舰全能",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥4.13 / M Tokens",
    "outputPrice": "¥4.13 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen2.5-32B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2.5-32B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥1.26 / M Tokens",
    "outputPrice": "¥1.26 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen2.5-14B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen2.5-14B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥0.7 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "stepfun-ai/Step-3.5-Flash",
    "developer": "StepFun",
    "type": "对话",
    "name": "Step-3.5-Flash",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "StepFun",
      "Vibe Coding"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.1 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "StepFun 提供的官方原生 对话 大模型"
  },
  {
    "id": "zai-org/GLM-4.6V",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4.6V",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "旗舰全能",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥3 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "moonshotai/Kimi-K2-Thinking",
    "developer": "Moonshot",
    "type": "对话",
    "name": "Kimi-K2-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Moonshot",
      "旗舰全能",
      "长文本处理",
      "数学推理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Moonshot 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/moonshotai/Kimi-K2-Thinking",
    "developer": "pro",
    "type": "对话",
    "name": "Kimi-K2-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "旗舰全能",
      "长文本处理",
      "数学推理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "zai-org/GLM-4.6",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4.6",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥3.5 / M Tokens",
    "outputPrice": "¥14 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "Kwaipilot/KAT-Dev",
    "developer": "Kuaishou",
    "type": "对话",
    "name": "KAT-Dev",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Kuaishou",
      "角色扮演",
      "游戏互动"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Kuaishou 提供的官方原生 对话 大模型"
  },
  {
    "id": "PaddlePaddle/PaddleOCR-VL",
    "developer": "Baidu",
    "type": "对话",
    "name": "PaddleOCR-VL",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Baidu",
      "多模态理解 / 识别"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Baidu 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-32B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-32B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-32B-Thinking",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-32B-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥10 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-8B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-8B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥0.5 / M Tokens",
    "outputPrice": "¥2 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-8B-Thinking",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-8B-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥0.5 / M Tokens",
    "outputPrice": "¥5 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-30B-A3B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-30B-A3B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-30B-A3B-Thinking",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-30B-A3B-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-235B-A22B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-235B-A22B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别",
      "旗舰全能"
    ],
    "inputPrice": "¥2.5 / M Tokens",
    "outputPrice": "¥10 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-VL-235B-A22B-Thinking",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-VL-235B-A22B-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别",
      "旗舰全能",
      "数学推理"
    ],
    "inputPrice": "¥2.5 / M Tokens",
    "outputPrice": "¥10 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-Omni-30B-A3B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-Omni-30B-A3B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别",
      "游戏互动"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-Omni-30B-A3B-Thinking",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-Omni-30B-A3B-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别",
      "游戏互动"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-Omni-30B-A3B-Captioner",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-Omni-30B-A3B-Captioner",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "多模态理解 / 识别",
      "游戏互动"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "moonshotai/Kimi-K2-Instruct-0905",
    "developer": "Moonshot",
    "type": "对话",
    "name": "Kimi-K2-Instruct-0905",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Moonshot",
      "旗舰全能",
      "文案创作",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Moonshot 提供的官方原生 对话 大模型"
  },
  {
    "id": "THUDM/GLM-4.1V-9B-Thinking",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4.1V-9B-Thinking",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "旗舰全能",
      "长文本处理",
      "数学推理"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "baidu/ERNIE-4.5-300B-A47B",
    "developer": "Baidu",
    "type": "对话",
    "name": "ERNIE-4.5-300B-A47B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Baidu",
      "旗舰全能",
      "文案创作",
      "长文本处理"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Baidu 提供的官方原生 对话 大模型"
  },
  {
    "id": "tencent/Hunyuan-A13B-Instruct",
    "developer": "Tencent",
    "type": "对话",
    "name": "Hunyuan-A13B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Tencent",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Tencent 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-32B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-32B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-14B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-14B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥0.5 / M Tokens",
    "outputPrice": "¥2 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-8B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-8B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-Reranker-8B",
    "developer": "Alibaba",
    "type": "重排序",
    "name": "Qwen3-Reranker-8B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥0.28 / M Tokens",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 重排序 大模型"
  },
  {
    "id": "Qwen/Qwen3-Embedding-8B",
    "developer": "Alibaba",
    "type": "嵌入",
    "name": "Qwen3-Embedding-8B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥0.28 / M Tokens",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 嵌入 大模型"
  },
  {
    "id": "Qwen/Qwen3-Reranker-4B",
    "developer": "Alibaba",
    "type": "重排序",
    "name": "Qwen3-Reranker-4B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥0.14 / M Tokens",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 重排序 大模型"
  },
  {
    "id": "Qwen/Qwen3-Embedding-4B",
    "developer": "Alibaba",
    "type": "嵌入",
    "name": "Qwen3-Embedding-4B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥0.14 / M Tokens",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 嵌入 大模型"
  },
  {
    "id": "Qwen/Qwen3-Reranker-0.6B",
    "developer": "Alibaba",
    "type": "重排序",
    "name": "Qwen3-Reranker-0.6B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥0.07 / M Tokens",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 重排序 大模型"
  },
  {
    "id": "Qwen/Qwen3-Embedding-0.6B",
    "developer": "Alibaba",
    "type": "嵌入",
    "name": "Qwen3-Embedding-0.6B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥0.07 / M Tokens",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 嵌入 大模型"
  },
  {
    "id": "ascend-tribe/pangu-pro-moe",
    "developer": "Huawei",
    "type": "对话",
    "name": "pangu-pro-moe",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Huawei",
      "旗舰全能",
      "数学推理",
      "领域知识综合"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Huawei 提供的官方原生 对话 大模型"
  },
  {
    "id": "THUDM/GLM-Z1-32B-0414",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-Z1-32B-0414",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "旗舰全能",
      "长文本处理",
      "RAG"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "THUDM/GLM-4-32B-0414",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4-32B-0414",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥1.89 / M Tokens",
    "outputPrice": "¥1.89 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "THUDM/GLM-Z1-9B-0414",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-Z1-9B-0414",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "旗舰全能",
      "长文本处理",
      "RAG"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "THUDM/GLM-4-9B-0414",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4-9B-0414",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/QwQ-32B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "QwQ-32B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "旗舰全能",
      "数学推理"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/zai-org/GLM-5.1",
    "developer": "pro",
    "type": "对话",
    "name": "GLM-5.1",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "Vibe Coding",
      "旗舰全能"
    ],
    "inputPrice": "¥6 / M Tokens",
    "outputPrice": "¥28 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/MiniMaxAI/MiniMax-M2.5",
    "developer": "pro",
    "type": "对话",
    "name": "MiniMax-M2.5",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "旗舰全能"
    ],
    "inputPrice": "¥2.1 / M Tokens",
    "outputPrice": "¥8.4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/zai-org/GLM-5",
    "developer": "pro",
    "type": "对话",
    "name": "GLM-5",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "Vibe Coding",
      "旗舰全能"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥22 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/moonshotai/Kimi-K2.5",
    "developer": "pro",
    "type": "对话",
    "name": "Kimi-K2.5",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "Vibe Coding",
      "旗舰全能",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥21 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/zai-org/GLM-4.7",
    "developer": "pro",
    "type": "对话",
    "name": "GLM-4.7",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "旗舰全能",
      "长文本处理",
      "Vibe Coding"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3.5-397B-A17B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3.5-397B-A17B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥1.2 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3.5-122B-A10B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3.5-122B-A10B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥2 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3.5-35B-A3B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3.5-35B-A3B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥1.6 / M Tokens",
    "outputPrice": "¥12.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3.5-27B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3.5-27B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥1.8 / M Tokens",
    "outputPrice": "¥14.4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3.5-9B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3.5-9B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "¥1.5 / M Tokens",
    "outputPrice": "¥12 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3.5-4B",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3.5-4B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "PaddlePaddle/PaddleOCR-VL-1.5",
    "developer": "Baidu",
    "type": "对话",
    "name": "PaddleOCR-VL-1.5",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Baidu",
      "多模态理解 / 识别"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Baidu 提供的官方原生 对话 大模型"
  },
  {
    "id": "Pro/moonshotai/Kimi-K2-Instruct-0905",
    "developer": "pro",
    "type": "对话",
    "name": "Kimi-K2-Instruct-0905",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "pro",
      "旗舰全能",
      "文案创作",
      "长文本处理"
    ],
    "inputPrice": "¥4 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "pro 提供的官方原生 对话 大模型"
  },
  {
    "id": "inclusionAI/Ring-flash-2.0",
    "developer": "InclusionAI",
    "type": "对话",
    "name": "Ring-flash-2.0",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "InclusionAI",
      "快速响应"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "InclusionAI 提供的官方原生 对话 大模型"
  },
  {
    "id": "inclusionAI/Ling-flash-2.0",
    "developer": "InclusionAI",
    "type": "对话",
    "name": "Ling-flash-2.0",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "InclusionAI",
      "快速响应"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "InclusionAI 提供的官方原生 对话 大模型"
  },
  {
    "id": "inclusionAI/Ling-mini-2.0",
    "developer": "InclusionAI",
    "type": "对话",
    "name": "Ling-mini-2.0",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "InclusionAI",
      "快速响应"
    ],
    "inputPrice": "¥0.5 / M Tokens",
    "outputPrice": "¥2 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "InclusionAI 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen-Image-Edit-2509",
    "developer": "Alibaba",
    "type": "生图",
    "name": "Qwen-Image-Edit-2509",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "图像编辑",
      "AIGC 内容创作"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥0.3 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 生图 大模型"
  },
  {
    "id": "Qwen/Qwen-Image-Edit",
    "developer": "Alibaba",
    "type": "生图",
    "name": "Qwen-Image-Edit",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "图像编辑",
      "AIGC 内容创作"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥0.3 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 生图 大模型"
  },
  {
    "id": "Qwen/Qwen-Image",
    "developer": "Alibaba",
    "type": "生图",
    "name": "Qwen-Image",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "图像生成",
      "AIGC 内容创作"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥0.3 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 生图 大模型"
  },
  {
    "id": "tencent/Hunyuan-MT-7B",
    "developer": "Tencent",
    "type": "对话",
    "name": "Hunyuan-MT-7B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Tencent",
      "内容翻译"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Tencent 提供的官方原生 对话 大模型"
  },
  {
    "id": "ByteDance-Seed/Seed-OSS-36B-Instruct",
    "developer": "ByteDance",
    "type": "对话",
    "name": "Seed-OSS-36B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "ByteDance",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥1.5 / M Tokens",
    "outputPrice": "¥4 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "ByteDance 提供的官方原生 对话 大模型"
  },
  {
    "id": "Wan-AI/Wan2.2-I2V-A14B",
    "developer": "Wan-AI",
    "type": "视频",
    "name": "Wan2.2-I2V-A14B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Wan-AI",
      "视频生成",
      "AIGC 内容创作"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥2 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Wan-AI 提供的官方原生 视频 大模型"
  },
  {
    "id": "Wan-AI/Wan2.2-T2V-A14B",
    "developer": "Wan-AI",
    "type": "视频",
    "name": "Wan2.2-T2V-A14B",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Wan-AI",
      "视频生成",
      "AIGC 内容创作"
    ],
    "inputPrice": "免费",
    "outputPrice": "¥2 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Wan-AI 提供的官方原生 视频 大模型"
  },
  {
    "id": "zai-org/GLM-4.5V",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4.5V",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "旗舰全能",
      "多模态理解 / 识别"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥6 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "zai-org/GLM-4.5-Air",
    "developer": "Zhipu AI",
    "type": "对话",
    "name": "GLM-4.5-Air",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Zhipu AI",
      "通用助手",
      "快速响应"
    ],
    "inputPrice": "¥1 / M Tokens",
    "outputPrice": "¥6 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Zhipu AI 提供的官方原生 对话 大模型"
  },
  {
    "id": "TeleAI/TeleSpeechASR",
    "developer": "TeleAI",
    "type": "语音",
    "name": "TeleSpeechASR",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "TeleAI"
    ],
    "inputPrice": "免费",
    "outputPrice": "免费",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "TeleAI 提供的官方原生 语音 大模型"
  },
  {
    "id": "Qwen/Qwen3-Coder-30B-A3B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-Coder-30B-A3B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "Vibe Coding"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-Coder-480B-A35B-Instruct",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-Coder-480B-A35B-Instruct",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "Vibe Coding"
    ],
    "inputPrice": "¥8 / M Tokens",
    "outputPrice": "¥16 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-30B-A3B-Thinking-2507",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-30B-A3B-Thinking-2507",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "旗舰全能",
      "长文本处理",
      "数学推理"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-30B-A3B-Instruct-2507",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-30B-A3B-Instruct-2507",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "通用助手",
      "文案创作",
      "Vibe Coding"
    ],
    "inputPrice": "¥0.7 / M Tokens",
    "outputPrice": "¥2.8 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B-Thinking-2507",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-235B-A22B-Thinking-2507",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "旗舰全能",
      "长文本处理",
      "数学推理"
    ],
    "inputPrice": "¥2.5 / M Tokens",
    "outputPrice": "¥10 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  },
  {
    "id": "Qwen/Qwen3-235B-A22B-Instruct-2507",
    "developer": "Alibaba",
    "type": "对话",
    "name": "Qwen3-235B-A22B-Instruct-2507",
    "release": "2024",
    "tags": [
      "SiliconFlow",
      "Alibaba",
      "旗舰全能",
      "文案创作",
      "长文本处理"
    ],
    "inputPrice": "¥2.5 / M Tokens",
    "outputPrice": "¥10 / M Tokens",
    "cacheInputPrice": "N/A",
    "cacheOutputPrice": "N/A",
    "contextLength": "动态自适应",
    "endpoints": [
      {
        "provider": "Anthropic",
        "path": "https://open.vxon.ai/api/anthropic",
        "method": "POST"
      },
      {
        "provider": "OpenAI",
        "path": "https://open.vxon.ai/api/coding/paas/v4",
        "method": "POST"
      },
      {
        "provider": "Gemini",
        "path": "https://open.vxon.ai/api/gemini",
        "method": "POST"
      }
    ],
    "description": "Alibaba 提供的官方原生 对话 大模型"
  }
];
